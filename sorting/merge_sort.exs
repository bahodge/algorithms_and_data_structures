defmodule MergeSort do
  def sort(list) when length(list) <= 1, do: list

  def sort(list) do
    splitting_point = length(list) |> div(2)
    {left, right} = Enum.split(list, splitting_point)
    :lists.merge(sort(left), sort(right))
  end
end

list_1 = Enum.map(0..10, fn _ -> Enum.random(1..100) end)
list_2 = Enum.map(0..15, fn _ -> Enum.random(1..100) end)
list_3 = [1, 60, 3, 35, 20]
list_4 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]

IO.inspect(MergeSort.sort(list_1))
IO.inspect(MergeSort.sort(list_2))
IO.inspect(MergeSort.sort(list_3))
IO.inspect(MergeSort.sort(list_4))
