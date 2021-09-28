export interface DefaultStateI {
    isLoading: false;
    users: any;
    errorMessage: any;
}

export const defaultState: DefaultStateI = {
    isLoading: false,
    users: null,
    errorMessage: null,
};
