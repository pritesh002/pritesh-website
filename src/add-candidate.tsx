import React, { useState } from "react";

const AddCandidate = () => {
  const [processingTAMember, setProcessingTAMember] = useState("");

  const handleProcessingTAMemberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setProcessingTAMember(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Existing form fields */}
      <div>
        <label htmlFor="processingTAMember">Processing TA Member:</label>
        <input
          type="text"
          id="processingTAMember"
          name="processingTAMember"
          value={processingTAMember}
          onChange={handleProcessingTAMemberChange}
        />
      </div>
      {/* Existing form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCandidate;
