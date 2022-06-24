import { useState } from "react";


export function useSelect() {
    const [selectConference, setSelectConference] = useState('East');
    const [selectItemsAmount, setSelectItemsAmount] = useState();

    return {selectConference, setSelectConference, selectItemsAmount, setSelectItemsAmount}
}