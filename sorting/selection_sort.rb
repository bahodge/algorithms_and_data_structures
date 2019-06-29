def sort(array)
  for current_index in 0..array.size-2
    lowest_index = current_index
    for next_index in current_index+1..array.size-1
        lowest_index = next_index if array[next_index] < array[lowest_index]
    end
    swap(array, current_index, lowest_index)
  end
  array
end

def swap(array, idx_1, idx_2)
    array[idx_2], array[idx_1] = array[idx_1], array[idx_2]
end

array_1 = [1, 60, 3, 35, 20];
array_2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]
p sort(array_1)
p sort(array_2)