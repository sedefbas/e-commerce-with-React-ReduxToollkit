import React from 'react'

const FavErrorMessage = () => {
  return (
    <div>
          <div class="fixed inset-0 flex items-center justify-center">
    <div class="max-w-md w-full px-4 py-6 bg-red-200 border-l-4 border-red-500">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="w-5 h-5 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M2.293 6.293a1 1 0 011.414 0L10 12.586l6.293-6.293a1 1 0 111.414 1.414L11.414 14l6.293 6.293a1 1 0 01-1.414 1.414L10 15.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 14 2.293 7.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-red-800">
            favorilerden çıkarıldı.
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default FavErrorMessage
