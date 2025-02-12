import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { increment, decrement, incrementByAmount } from "../../store/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-2">Counter: {count}</h2>
      <div className="space-x-2">
        <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={() => dispatch(incrementByAmount(5))}>
          +5
        </button>
      </div>
    </div>
  );
};

export default Counter;
