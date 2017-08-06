const STORAGE_KEYS = {
    TRANSACTIONS: 'CONSIGLIERE.TRANSACTIONS'
};

export const storeTransactions = (transactions) => {
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
};

export const loadTransactions = () => {
    try {
        const savedTransactions = JSON.parse(localStorage.getItem(STORAGE_KEYS.TRANSACTIONS));

        return savedTransactions || undefined;
    } catch (error) {
        return undefined;
    }
};
