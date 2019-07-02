defmodule QuickSort do
  def sort([]), do: []

  def sort([pivot | rest]) do
    {left, right} = Enum.split_with(rest, &(&1 < pivot))
    sort(left) ++ [pivot | sort(right)]
  end
end

list_1 = Enum.map(0..10, fn _ -> Enum.random(1..100) end)
list_2 = Enum.map(0..15, fn _ -> Enum.random(1..100) end)
list_3 = [1, 60, 3, 35, 20]
list_4 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]

IO.inspect(QuickSort.sort(list_1))
IO.inspect(QuickSort.sort(list_2))
IO.inspect(QuickSort.sort(list_3))
IO.inspect(QuickSort.sort(list_4))
