export default function ToastSuccess({message, onClose}) {
    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full z-50 p-6">
        <div className="bg-green-100 max-w-max mx-auto rounded-6xl py-4 px-6 sm:px-10">
          <div className="flex items-center justify-center gap-5">
            <div className="w-auto">
              <div className="w-8 h-8 rounded-full border border-neutral-900 flex items-center justify-center">
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.353553" y1="5.64645" x2="4.35355" y2="9.64645" stroke="#19191B"></line><line x1="14.3536" y1="0.353553" x2="4.35355" y2="10.3536" stroke="#19191B"></line></svg>
              </div>
            </div>
            <div className="w-px h-10 bg-green-900 bg-opacity-10"></div>
            <p className="font-medium tracking-tight">{message}</p>
            <button
              onClick={onClose}
              className="text-neutral-600 hover:text-neutral-800"
            >
              X
            </button>
          </div>
        </div>
      </div>
    )
}