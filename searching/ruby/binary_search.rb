def search(array, item)
    left_idx = 0
    right_idx = array.length - 1
    middle_idx = ((left_idx + right_idx) / 2).floor

    while item != array[middle_idx] and left_idx <= right_idx
        if item < array[middle_idx]
            right_idx = middle_idx - 1
        else
            left_idx = middle_idx + 1
        end
        middle_idx = ((left_idx + right_idx) / 2).floor
    end
    array[middle_idx] == item ? middle_idx : -1
end

array_1 = (0..20).to_a
array_2 = (0..1_000_000).to_a

p search(array_1, 3)
p search(array_1, 22)
p search(array_2, 15832)
