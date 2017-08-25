const STORAGE_KEYS = {
    TRANSACTIONS: 'CONSIGLIERE.TRANSACTIONS'
};

export const storeTransactions = (transactions) => {
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
};

const loadTransactions = () => {
    try {
        const savedTransactions = JSON.parse(localStorage.getItem(STORAGE_KEYS.TRANSACTIONS));

        return savedTransactions;
    } catch (error) {
        return undefined;
    }
};

export const loadState = () => {
    const transactions = loadTransactions();

    return {
        transactions
    };
};

export const initAutoSave = (store) => {
    store.subscribe(() => {
        const { transactions } = store.getState();

        storeTransactions(transactions);
    });
};
