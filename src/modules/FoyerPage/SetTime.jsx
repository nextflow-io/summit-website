import React from 'react';

const SetTime = ({ setSecondsRemaining, setTitle }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const minutes = formData.get('minutes');
    const title = formData.get('title');
    if (!minutes || !title) return;
    setSecondsRemaining(minutes * 60);
    setTitle(title);
  }
  return (
    <div className="flex-auto flex items-center justify-center w-[100vw] h-[100vh]">
      <div className="w-1/2 text-center p-40">
        <form method="post" onSubmit={handleSubmit} className="inline-block">
          <div className="font-bold text-green-300 leading-none flex flex-col align-stretch items-stretch">
            <input type="text" name="title" className="text-xl px-8 py-4 mb-4 rounded-sm" placeholder="Title" />
            <input
              type="number"
              name="minutes"
              className="text-xl px-8 py-4 mb-4 rounded-sm"
              placeholder="Minutes remaining"
            />
            <input
              type="submit"
              value="Start"
              className="inline-block px-8 py-4 rounded-sm bg-green-300 text-green-900 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetTime;
