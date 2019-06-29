defmodule SelectionSort do
  def sort(list) when is_list(list) do
    do_sort(list, [])
  end

  defp do_sort([head | []], acc) do
    acc ++ [head]
  end

  defp do_sort(list, acc) do
    min = min(list)
    # this pretty much finds the lowest number and adds it to the new list
    do_sort(List.delete(list, min), acc ++ [min])
  end

  defp min([first | [second | []]]) do
    smaller(first, second)
  end

  defp min([first | [second | tail]]) do
    min([smaller(first, second) | tail])
  end

  defp smaller(element_1, element_2) do
    if element_1 <= element_2, do: element_1, else: element_2
  end
end

list_1 = Enum.map(0..10, fn _ -> Enum.random(1..100) end)
list_2 = Enum.map(0..15, fn _ -> Enum.random(1..100) end)
list_3 = [1, 60, 3, 35, 20]
list_4 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]

IO.inspect(SelectionSort.sort(list_1))
IO.inspect(SelectionSort.sort(list_2))
IO.inspect(SelectionSort.sort(list_3))
IO.inspect(SelectionSort.sort(list_4))
