def sort(array, left = 0, right = array.length - 1)
  if (left < right) 
    pivot_index = pivot_helper(array, left, right)
    sort(array, left, pivot_index - 1)
    sort(array, pivot_index + 1, right)
  end

  array
end

def pivot_helper(array, start_index = 0, end_index = array.length + 1)
  pivot = array[start_index]
  swap_index = start_index

  for i in start_index..end_index
    break unless array[i]
    if pivot > array[i]
      swap_index += 1
      swap_items(array, swap_index, i)
    end
  end
  swap_items(array, swap_index, start_index)
  swap_index
end

def swap_items(array, index_1, index_2)
  tmp = array[index_1]
  array[index_1] = array[index_2]
  array[index_2] = tmp
  array
end

array_1 = (0..10).map {|x| rand(0..100)}
array_2 = (0..15).map {|x| rand(0..100)}
array_3 = [1, 60, 3, 35, 20];
array_4 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267]

p sort(array_1)
p sort(array_2)
p sort(array_3)
p sort(array_4)
