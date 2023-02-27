import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@nextui-org/react";
import Result from "../Result";
import Question from "@/questions";

const { task, expectedOutput, checkExpectedOutput } = Question

const CodeIde = () => {
    const [showModal, setShowModal] = useState(false)
    const [startTime, setStartTime] = useState(() => Date.now());
    const [editerLoaded, setEditorLoaded] = useState(false);
    const [state, setState] = useState({
        userOutput: {},
        isCorrect: false
    })
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        setEditorLoaded(true)
    }

    const handleModal = () => {
        setShowModal(state => !state)
    }

    const showValue = () => {
        var output = new Function(editorRef.current.getValue())();
        const result = checkExpectedOutput(output);
        setState(state => ({ ...state, userOutput: output, isCorrect: result }))
        handleModal();
    }

    const passDefaultValue = (funcBody) => {
        const value = `const main = ${funcBody} \nreturn main(); 
        `
        return value;
    }

    return <>
        <Editor
            height="80vh"
            theme="vs-dark"
            defaultLanguage="javascript"
            value={passDefaultValue(task.toString())}
            onMount={handleEditorDidMount}
        />
        <Button bordered disabled={!editerLoaded} color={"gradient"} css={{
            marginTop: 5
        }} onClick={showValue}>Solve</Button>
        <Result
            userOutput={state.userOutput}
            isCorrect={state.isCorrect}
            expectedOutput={expectedOutput}
            isOpen={showModal}
            handleModal={handleModal}
        />
    </>
}


export default CodeIde;