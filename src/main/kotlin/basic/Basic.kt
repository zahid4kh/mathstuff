package math.basic

fun mean(numbers: List<Float>): Float {
    return if (numbers.isNotEmpty()) {
        numbers.sum() / numbers.size
    } else {
        0f
    }
}

fun mode(numbers: List<Float>): Float {
    if (numbers.isEmpty()) return 0f

    val frequencyMap = numbers.groupingBy { it }.eachCount()
    val maxFrequency = frequencyMap.values.maxOrNull() ?: return 0f
    val modes = frequencyMap.filterValues { it == maxFrequency }.keys

    return modes.minOrNull() ?: 0f
}

fun median(numbers: List<Float>): Float {
    if (numbers.isEmpty()) return 0f

    val sorted = numbers.sorted()
    val middle = sorted.size / 2

    return if (sorted.size % 2 == 0) {
        (sorted[middle - 1] + sorted[middle]) / 2
    } else {
        sorted[middle]
    }
}

fun addInt(a: Int, b: Int): Int{
    return a+b
}

fun addFloat(a: Float, b: Float): Float{
    return a + b
}

fun addDouble(a: Double, b: Double): Double{
    return a + b
}