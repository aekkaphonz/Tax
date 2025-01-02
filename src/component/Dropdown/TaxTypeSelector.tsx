import React from 'react';

interface TaxTypeSelectorProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const TaxTypeSelector: React.FC<TaxTypeSelectorProps> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="type__section ml-8">
      <div className="subhead__title">
        Type <span className="last-letter">*</span>
      </div>
      <select
        className="custom__select"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="On-Time">On-Time</option>
        <option value="Late">Late</option>
      </select>
    </div>
  );
};

export default TaxTypeSelector;
