import { useState } from 'react';

import { Container, Content, Row } from './styles';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
    const [CurrentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const handleOnClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('');
    };

    const handleAddNumber = (number) => {
        setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
    };

    const handleOperation = (operation) => {
        if (firstNumber == '0') {
            setFirstNumber(String(CurrentNumber));
            setCurrentNumber('0');
        } else {
            setCurrentNumber(String(eval(firstNumber + operation + CurrentNumber)));
            setFirstNumber('0');
        }
        setOperation(operation)
    };

    const handleEquals = () => {
        if (firstNumber != '0' && operation != '' && CurrentNumber != '0') {
            handleOperation(operation);
            setOperation('=');
        }
    };

    return (
        <Container>
            <Content>
                <Input value={CurrentNumber} />
                <Row>
                    <Button label={'C'} onClick={handleOnClear} />
                    <Button label={'/'} onClick={() => handleOperation('/')} />
                    <Button label={'*'} onClick={() => handleOperation('*')} />
                    <Button label={'-'} onClick={() => handleOperation('-')} />
                </Row>
                <Row>
                    <Button label={'7'} onClick={() => handleAddNumber('7')} />
                    <Button label={'8'} onClick={() => handleAddNumber('8')} />
                    <Button label={'9'} onClick={() => handleAddNumber('9')} />
                    <Button label={'+'} onClick={() => handleOperation('+')} />
                </Row>
                <Row>
                    <Button label={'4'} onClick={() => handleAddNumber('4')} />
                    <Button label={'5'} onClick={() => handleAddNumber('5')} />
                    <Button label={'6'} onClick={() => handleAddNumber('6')} />
                    <Button label={'='} onClick={handleEquals} />
                </Row>
                <Row>
                    <Button label={'1'} onClick={() => handleAddNumber('1')} />
                    <Button label={'2'} onClick={() => handleAddNumber('2')} />
                    <Button label={'3'} onClick={() => handleAddNumber('3')} />
                    <Button label={'0'} onClick={() => handleAddNumber('0')} />
                </Row>
            </Content>
        </Container>
    );
}

export default App;
