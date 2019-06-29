defmodule MergeSort do
  def merge_sort(list) when length(list) <= 1, do: list

  def merge_sort(list) do
    splitting_point = length(list) |> div(2)
    {left, right} = Enum.split(list, splitting_point)
    :lists.merge(merge_sort(left), merge_sort(right))
  end
end

list_1 = Enum.map(0..100, fn _ -> Enum.random(1..100) end)
list_2 = Enum.map(0..100, fn _ -> Enum.random(1..100) end)

# list_1 = [1, 60, 3, 35, 20]
# list_2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]

IO.inspect(MergeSort.merge_sort(list_1))
IO.inspect(MergeSort.merge_sort(list_2))
