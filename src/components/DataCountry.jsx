const DataContry = (props) => {
    const { name, value, percentage } = props;
    return (
        <>
            <div className="country-data-row">
                <p className="country-data-row-name"> {name}</p>
                <p className="country-data-row-value">{value}</p>
                <div style={{ flexGrow: 1 }}>
                    <div className="country-data-row-precentage" style={{ width: `${percentage}%` }}></div>
                </div>
            </div>

        </>
    );
}
export default DataContry