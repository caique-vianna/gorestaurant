import React, { userCallback, useRef, useState } from "react";

import { Container } from "./styles";

export const Input = ({ ...rest}) => {
    const inputRef = useRef < HTMLInputElement > null;

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setFilled] = useState(false);

    const handleInputFocus = userCallback(() =>  {

    }, []);

    return  (
        <Container isFilled={isFilled} isFocused={isFocused}>
            <input onFocus={handleInputFocus} ref={inputRef} {...rest} />
        </Container>
    )
}