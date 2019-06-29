def merge_sort(array)
  return array if (array.length <= 1) 
  mid_point = (array.length / 2).floor
  left = merge_sort(array.slice(0, mid_point))
  right = merge_sort(array.slice(mid_point,  array.length))
  merge(left, right)
end

def merge(array_1, array_2)
  results = []
  i = 0
  j = 0

  while i < array_1.length and j < array_2.length
    if array_1[i] < array_2[j]
      results << array_1[i]
      i += 1
    else
      results << array_2[j]
      j += 1
    end
  end

  while i < array_1.length
    results << array_1[i]
    i += 1
  end

  while j < array_2.length
    results << array_2[j]
    j += 1
  end

  results
end

list_1 = [1, 60, 3, 35, 20];
list_2 = [2, 32, 6, 35, 29, 16, 78, 332, 325, 122, 5, 56, 6, 15, 267];

p merge_sort(list_1)
p merge_sort(list_2)

# sorted_array_1 = [1, 3, 5];
# sorted_array_2 = [2, 4, 6, 7];

# p merge(sorted_array_1, sorted_array_2)
