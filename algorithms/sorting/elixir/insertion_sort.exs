defmodule InsertionSort do
  def sort(list) when is_list(list) do
    do_sort([], list)
  end

  def do_sort(_sorted_list = [], _unsorted_list = [head | tail]) do
    do_sort([head], tail)
  end

  def do_sort(sorted_list, _unsorted_list = [head | tail]) do
    insert(head, sorted_list) |> do_sort(tail)
  end

  def do_sort(sorted_list, _unsorted_list = []) do
    sorted_list
  end

  def insert(elem, _sorted_list = []) do
    [elem]
  end

  def insert(elem, sorted_list) do
    [min | rest] = sorted_list

    if min >= elem do
      [elem | [min | rest]]
    else
      [min | insert(elem, rest)]
    end
  end
end

list_1 = Enum.map(0..10, fn _ -> Enum.random(1..100) end)
list_2 = Enum.map(0..15, fn _ -> Enum.random(1..100) end)
list_3 = [1, 60, 3, 35, 20]
list_4 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]

IO.inspect(InsertionSort.sort(list_1))
IO.inspect(InsertionSort.sort(list_2))
IO.inspect(InsertionSort.sort(list_3))
IO.inspect(InsertionSort.sort(list_4))
