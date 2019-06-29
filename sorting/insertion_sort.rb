def insertion_sort(arr)
  sorted_array = []
  # populate the array with the first item
  sorted_array << arr.shift
  # loop over the unordered array
  arr.each do |item|
    idx = 0
    # stay on this unordered item until the end of the sorted array
    while idx < sorted_array.length
      # if item is lte then insert at that point
      if item <= sorted_array[idx]
        # finds a the place where the item should go
        sorted_array.insert(idx, item)
        break # next item to go through loop
      elsif idx == sorted_array.length - 1
        # reached the last item in the sorted array
        sorted_array << item
        break # next item to go through loop
      end
      # didnt find match in the sorted array, go to sorted item
      idx += 1
    end
  end
  sorted_array
end

arr_1 = [3, 2, 4, 6, 1, 8, 1, 12]
arr_2 = [1, 5, 1, 2]

p insertion_sort(arr_1)
p insertion_sort(arr_2)
