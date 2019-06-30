defmodule LinearSearch do
  def search(list, item) do
    search(list, item, 0)
  end

  defp search([head | []], item, current_index) do
    if head == item, do: current_index, else: -1
  end

  defp search([head | tail], item, current_index) do
    if head == item, do: current_index, else: search(tail, item, current_index + 1)
  end
end

list_1 = Enum.map(0..20, & &1)
list_2 = Enum.map(0..1_000_000, & &1)

IO.inspect(LinearSearch.search(list_1, 3))
IO.inspect(LinearSearch.search(list_1, 22))
IO.inspect(LinearSearch.search(list_2, 15832))
