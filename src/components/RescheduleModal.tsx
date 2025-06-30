import React from 'react';

type Props = {
  newTime: string;
  onTimeChange: (val: string) => void;
  onCancel: () => void;
  onSave: () => void;
};

const RescheduleModal: React.FC<Props> = ({ newTime, onTimeChange, onCancel, onSave }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Reschedule Appointment</h2>
        <input
          type="datetime-local"
          className="border px-3 py-2 w-full mb-4"
          value={newTime}
          onChange={(e) => onTimeChange(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;
