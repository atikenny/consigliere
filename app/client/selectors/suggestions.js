import { createSelector } from 'reselect';

const getSuggestion = (state, id) => state.suggestions.find(item => item.id === id);

export const isSuggestionOpen = createSelector(
    [getSuggestion],
    (suggestion) => suggestion && suggestion.isOpen
);
