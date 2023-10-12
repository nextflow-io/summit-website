import React from 'react';

const SetTime = ({ setSecondsRemaining }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    setSecondsRemaining(formData.get('minutes') * 60);
  }
  return (
    <div className="flex-auto flex items-center justify-center">
      <div className="w-1/2 text-center p-40">
        <form method="post" onSubmit={handleSubmit} className="inline-block">
          <div className="text-lg text-white mb-4">Minutes until next event</div>
          <div className="font-bold text-green-300 leading-none flex items-stretch">
            <input type="number" name="minutes" className="text-xl px-8 py-4 w-[150px] rounded-sm" />
            <input
              type="submit"
              value="Submit"
              className="inline-block px-8 py-4 rounded-sm bg-green-300 text-green-900 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetTime;
