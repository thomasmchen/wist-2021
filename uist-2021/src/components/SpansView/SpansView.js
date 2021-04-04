import React, { useState, useEffect, useRef } from 'react'
import Segment from './Segment'
import "./SpansView.css"
import classnames from 'classnames'

const ifArrayIntersect = (array1, array2) => {
    const set2 = new Set(array2);
    for(let i = 0; i < array1.length; i++) {
        if (set2.has(array1[i])) return true;
    }
    return false
}

function TitleView(props) {
    return (
        <div className="TitleViewContainer">
            <div className="TitleViewImageContainer">
                <img className="TitleViewImage" src={props.image}></img>
            </div>
            <div className="TitleViewTextContainer">
                <div className="TitleViewTextWrapper">
                    <div className="TitleViewSubtitle">{props.subtitle ? props.subtitle : "Subtitle Not Found"}</div>
                    <div className="TitleViewTitle">{props.title ? props.title : "Title Not Found"}</div>
                    <div className="TitleViewDate">{props.date ? props.date : "Date Not Found"}</div>
                </div>
            </div>
        </div>
    )
}

function TemporalView(props) {
    const [rawItems, setRawItems] = useState([])
    const [lowItems, setLowItems] = useState([])
    const [medItems, setMedItems] = useState([])
    const [highItems, setHighItems] = useState([])

    // only run when `raw` changes
    let { raw } = props;
    useEffect(() => {
        if (!props.raw) return;

        // convert all start-end to % duration
        const absoluteStart = props.raw[0].start
        const absoluteEnd = props.raw[props.raw.length - 1].end
        const duration = absoluteEnd - absoluteStart
        const rawMappedItems = props.raw.map(element => {
            return {
                name: element.id[0],
                duration: (element.end - element.start) / duration,
                ids: element.id
            }
        })
        let rawDurationMap = {}
        rawMappedItems.forEach(e => rawDurationMap[e.name] = e.duration)

        // convert all other items to width= sum(associated segments duration)
        const lowMappedItems = props.low.map(element => {
            return {
                name: element.id.join(", "),
                duration: element.id.reduce((p, c) => p + rawDurationMap[c], 0), // cumulative duration of all associated segments
                ids: element.id
            }
        })

        const medMappedItems = props.med.map(element => {
            return {
                name: element.id.join(", "),
                duration: element.id.reduce((p, c) => p + rawDurationMap[c], 0), // cumulative duration of all associated segments
                ids: element.id
            }
        })

        const highMappedItems = props.high.map(element => {
            return {
                name: element.id.join(", "),
                duration: element.id.reduce((p, c) => p + rawDurationMap[c], 0), // cumulative duration of all associated segments
                ids: element.id
            }
        })

        setRawItems(rawMappedItems)
        setLowItems(lowMappedItems)
        setMedItems(medMappedItems)
        setHighItems(highMappedItems)
    }, [raw])

    return (
        <div className="temporal">
            <div className="row">
                <p className="label">Orig</p>
                <div className="data raw">
                    {rawItems.map((element, idx) =>
                        <div key={idx} className={classnames({"selected": ifArrayIntersect(element.ids, props.selectedIds), "item": true})}
                            style={{flex: `${(element.duration * 100).toFixed(2)} 1 auto`}}
                            onClick={() => {props.setSelected(element.ids); props.setHighSelected(idx)}}></div>)}
                </div>
            </div>
            <div className="row">
                <p className="label">Long</p>
                <div className="data low">
                    {lowItems.map((element, idx) =>
                        <div key={idx} className={classnames({"selected": ifArrayIntersect(element.ids, props.selectedIds), "item": true})}
                            style={{flex: `${(element.duration * 100).toFixed(2)} 1 auto`}}
                            onClick={() => {props.setSelected(element.ids); props.setHighSelected(idx)}}></div>)}
                </div>
            </div>
            <div className="row">
                <p className="label">Med</p>
                <div className="data med">
                    {medItems.map((element, idx) =>
                        <div key={idx} className={classnames({"selected": ifArrayIntersect(element.ids, props.selectedIds), "item": true})}
                            style={{flex: `${(element.duration * 100).toFixed(2)} 1 auto`}}
                            onClick={() => {props.setSelected(element.ids); props.setHighSelected(idx)}}></div>)}
                </div>
            </div>
            <div className="row">
                <p className="label">Short</p>
                <div className="data high">
                    {highItems.map((element, idx) =>
                        <div key={idx} className={classnames({"selected": ifArrayIntersect(element.ids, props.selectedIds), "item": true})}
                            style={{flex: `${(element.duration * 100).toFixed(2)} 1 auto`}}
                            onClick={() => {props.setSelected(element.ids); props.setHighSelected(idx)}}></div>)}
                </div>
            </div>
        </div>
    )
}

function HighCol(props) {
    // takes in segments prop
    // takes in selectedIds prop
    // takes in setSelected prop
    return (
        <div className="SegmentColumn High">
            <div className="ColumnTitleContainer">
                <h2 className="ColumnTitle">{props.title} Summary</h2>
            </div>
            <div className="data">
                { props.segments
                    .map((segment, idx) =>
                        <div key={idx} 
                            onClick={() => {props.setSelected(segment.id)}} 
                            className={classnames({'selected': ifArrayIntersect(segment.id, props.selectedIds), "item": true})}
                            ref={ifArrayIntersect(segment.id, props.selectedIds) ? props.selectedRef : null}>
                            <Segment 
                                text={segment.text} 
                                id={segment.id.join(", ")}
                                sequence={segment.sequence}
                                phrase={segment.phrase ? segment.phrase : null}
                                isSelected={ifArrayIntersect(segment.id, props.selectedIds)}
                                speaker={segment.duration}/>
                        </div>
                    ) }
            </div>
        </div>
    );
}

function GenericCol(props) {
    // takes in title prop
    // takes in segments prop
    // takes in selectedIds prop
    return (
        <div className={`SegmentColumn notclickable ${props.title}`}>
            <div className="ColumnTitleContainer">
                <h2 className="ColumnTitle">{props.title} Summary</h2>
            </div>
            <div className="data">
                { props.segments
                        .filter(segment => ifArrayIntersect(segment.id, props.selectedIds))
                        .map((segment, idx) =>
                            <div key={idx} className={classnames({'selected': true, "item": true})}>
                                { (segment.start && segment.end) ?
                                <Segment 
                                text={segment.text} id={segment.id.join(", ")}
                                speaker={segment.speaker ? segment.speaker : null}
                                phrase={segment.phrase ? segment.phrase : null}
                                isSelected={ifArrayIntersect(segment.id, props.selectedIds)}
                                audioName={props.audioName}
                                start={segment.start}
                                end={segment.end}
                                label="Speaker"/>
                                :
                                <Segment 
                                    text={segment.text} id={segment.id.join(", ")}
                                    speaker={segment.speaker ? segment.speaker : null}
                                    phrase={segment.phrase ? segment.phrase : null}
                                    isSelected={ifArrayIntersect(segment.id, props.selectedIds)}
                                    label="Speaker"/>
                                }
                            </div>
                        ) }
            </div>
        </div>
    );
}

function SpansView(props) {
    const [selectedIds, setSelectedIds] = useState([])
    const [highSelectedIdx, setHighSelectedIdx] = useState(null)
    const selectedRef = useRef(null);

    // reset selectedId on audioData change
    let { audioData } = props;
    useEffect(() => setSelectedIds(null), [audioData])

    // scroll to high segment if out of view when a qualifying segment is chosen
    useEffect(() => {
        if (highSelectedIdx === null){
            return;
        }

        if (selectedRef.current){
            selectedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });
        }

    }, [selectedRef, highSelectedIdx]);


    if (!props.audioData) {
        return (
            <div>
                <h1>Explore View</h1>
                <p>No audio sample selected</p>
            </div>
        )
    }

    return (
        <div className="Parent">
            <div className="HighSegmentViewColumn">
                <HighCol title="Short" segments={props.audioData["high"]["segments"]} selectedIds={selectedIds} setSelected={setSelectedIds} selectedRef={selectedRef}/>
            </div>
            <div className="DataViewColumn">
                <div>
                    <TitleView title={props.audioData.title} subtitle={props.audioData.subtitle} date={props.audioData.date} audioName={props.audioName} image={props.audioData.image}></TitleView>
                    <TemporalView
                        raw={props.audioData["raw"]["segments"]}
                        high={props.audioData["high"]["segments"]}
                        med={props.audioData["med"]["segments"]}
                        low={props.audioData["low"]["segments"]}
                        selectedIds={selectedIds} setSelected={setSelectedIds} setHighSelected={setHighSelectedIdx} />
                </div>
                <div className="SegmentColumnContainer">
                    <GenericCol title="Medium" segments={props.audioData["med"]["segments"]} selectedIds={selectedIds} label="speaker"/>
                    <GenericCol title="Long" segments={props.audioData["low"]["segments"]} selectedIds={selectedIds} label="speaker"/>
                    <GenericCol title="Original" segments={props.audioData["raw"]["segments"]} selectedIds={selectedIds} audioName={props.audioName} label="speaker"/>
                </div>
            </div>
        </div>
    )
}

export default SpansView