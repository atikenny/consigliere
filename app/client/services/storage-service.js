const STORAGE_KEY = 'CONSIGLIERE';

const storeState = (state) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const patchState = (state) => {
    return state;
};

const readState = () => {
    try {
        const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));

        return patchState(savedState) || undefined;
    } catch (error) {
        return undefined;
    }
};

export const loadState = () => {
    const state = readState();

    return state;
};

export const initAutoSave = (store) => {
    store.subscribe(() => {
        const state = store.getState();

        storeState(state);
    });
};
