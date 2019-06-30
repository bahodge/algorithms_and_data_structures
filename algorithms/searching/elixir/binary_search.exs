defmodule BinarySearch do
  def search(list, item), do: search(list, item, 0, length(list) - 1)
  defp search(_list, _item, left_idx, right_idx) when right_idx < left_idx, do: -1

  defp search(list, item, left_idx, right_idx) do
    mid_idx = div(left_idx + right_idx, 2)
    mid_value = Enum.at(list, mid_idx)
    search(list, item, mid_value, left_idx, mid_idx, right_idx)
  end

  defp search(list, item, mid_value, _left_idx, mid_idx, right_idx) when item > mid_value do
    search(list, item, mid_idx + 1, right_idx)
  end

  defp search(list, item, mid_value, left_idx, mid_idx, _right_idx) when item < mid_value do
    search(list, item, left_idx, mid_idx - 1)
  end

  defp search(_list, _item, _mid_value, _left_idx, mid_idx, _right_idx), do: mid_idx
end

list_1 = Enum.map(0..20, & &1)
list_2 = Enum.map(0..1_000_000, & &1)

IO.inspect(BinarySearch.search(list_1, 3))
IO.inspect(BinarySearch.search(list_1, 22))
IO.inspect(BinarySearch.search(list_2, 15832))
