import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/modals/stats';

const Stats = ({ labelsGroup, currency }) => (
    <div className="stats-container">
        <h2>Stats</h2>
        <h3>Labels</h3>
        <table className="labels-group">
            <tbody>
                {labelsGroup.map(group => (
                    <tr key={group.label} className="item">
                        <td className="label">{group.label}</td>
                        <td className="amount-summary">
                            {`${currency} ${Math.round(group.amountSummary)}`}
                        </td>
                        <td className="item-count">{group.itemCount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default Stats;

Stats.propTypes = {
    currency: PropTypes.string,
    labelsGroup: PropTypes.array
};
