import React from "react";
import { Modal, Button, Text, Grid } from "@nextui-org/react";
import Editor from "@monaco-editor/react";


const Result = ({ isOpen, handleModal, expectedOutput, userOutput, isCorrect = true }) => {
    const getCode = (name, output) => {
        return `const ${name} = ${JSON.stringify(output, undefined, 2)}`
    }


    return <Modal closeButton open={isOpen} onClose={handleModal} width="800px" >
        <Modal.Header>
            <Text id="modal-title" size={18}>
                {isCorrect ? "Great work :)" : "Wrong output :("}
            </Text>
        </Modal.Header>
        <Modal.Body>
            <Grid.Container
                justify="space-between"
                wrap="no-wrap"
            >
                <Grid css={{ flex: 0.49 }}>
                    <Editor
                        height="200px"
                        theme="vs-dark"
                        defaultLanguage="javascript"
                        value={getCode("yourOutput", userOutput)}
                    />
                </Grid>
                <Grid css={{ flex: 0.49 }}>
                    <Editor
                        height="200px"
                        theme="vs-dark"
                        defaultLanguage="javascript"
                        value={getCode("expected", expectedOutput)}
                    />
                </Grid>
            </Grid.Container>
            {isCorrect &&
                <Button bordered color={"gradient"} css={{ marginTop: 5 }} onClick={() => window.location.reload()}>
                    Get New Question
                </Button>
            }
        </Modal.Body>
    </Modal>
}

export default Result;