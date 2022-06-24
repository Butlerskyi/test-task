import { useDispatch } from "react-redux";

export function usePagination(totalPages, selectedPage, changePage) {
    const dispatch = useDispatch();
    const teamsAmountArr = [];
    const playersAmountArr = [];
    const pagesAmountArr = [];

    for (let i = 1; i < 21; i++) {
        teamsAmountArr.push(i);
    }

    for (let i = 1; i < 9; i++) {
        playersAmountArr.push(i);
    }

    for (let i = 1; i <= totalPages; i++) {
        pagesAmountArr.push(i);
    }

    const setPreviousPage = () => {
        if (selectedPage > 1) {
            dispatch(changePage(selectedPage - 1))
        }
    }

    const setNextPage = () => {
        if (selectedPage < totalPages) {
            dispatch(changePage(selectedPage + 1))
        }
    }

    return {teamsAmountArr, pagesAmountArr, setPreviousPage, setNextPage,  playersAmountArr};
}