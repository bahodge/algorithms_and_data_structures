defmodule BubbleSort do
  def sort(list) when is_list(list) do
    make_pass(do_sort(list, []), list)
  end

  defp make_pass(bubbling_list, original_list) when bubbling_list != original_list do
    do_sort(bubbling_list, []) |> make_pass(bubbling_list)
  end

  defp make_pass(bubbling_list, original_list) when bubbling_list == original_list do
    bubbling_list
  end

  defp swap(x, y), do: if(x > y, do: [y, x], else: [x, y])

  defp do_sort(_list = [], _new_list), do: []
  defp do_sort([first], new_list), do: new_list ++ [first]

  defp do_sort([first | [second | tail]], new_list) do
    [new_first, new_second] = swap(first, second)
    do_sort([new_second | tail], new_list ++ [new_first])
  end
end

list_1 = Enum.map(0..100, fn _ -> Enum.random(1..100) end)
list_2 = Enum.map(0..100, fn _ -> Enum.random(1..100) end)

# list_1 = [1, 60, 3, 35, 20]
# list_2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]

IO.inspect(BubbleSort.sort(list_1))
IO.inspect(BubbleSort.sort(list_2))
