package math.vectors

import kotlin.math.acos
import kotlin.math.sqrt

fun vectorAdd(vec1: FloatArray, vec2: FloatArray): FloatArray {
    if (vec1.size != vec2.size) throw IllegalArgumentException("Vectors must have the same dimension")

    val result = FloatArray(vec1.size)
    for (i in vec1.indices) {
        result[i] = vec1[i] + vec2[i]
    }
    return result
}

fun vectorSubtract(vec1: FloatArray, vec2: FloatArray): FloatArray {
    if (vec1.size != vec2.size) throw IllegalArgumentException("Vectors must have the same dimension")

    val result = FloatArray(vec1.size)
    for (i in vec1.indices) {
        result[i] = vec1[i] - vec2[i]
    }
    return result
}

fun dotProduct(vec1: FloatArray, vec2: FloatArray): Float {
    if (vec1.size != vec2.size) throw IllegalArgumentException("Vectors must have the same dimension")

    var result = 0f
    for (i in vec1.indices) {
        result += vec1[i] * vec2[i]
    }
    return result
}

fun crossProduct(vec1: FloatArray, vec2: FloatArray): FloatArray {
    if (vec1.size != 3 || vec2.size != 3) throw IllegalArgumentException("Cross product requires 3D vectors")

    return floatArrayOf(
        vec1[1] * vec2[2] - vec1[2] * vec2[1],
        vec1[2] * vec2[0] - vec1[0] * vec2[2],
        vec1[0] * vec2[1] - vec1[1] * vec2[0]
    )
}

fun vectorMagnitude(vec: FloatArray): Float {
    var sumOfSquares = 0f
    for (component in vec) {
        sumOfSquares += component * component
    }
    return sqrt(sumOfSquares)
}

fun unitVector(vec: FloatArray): FloatArray {
    val magnitude = vectorMagnitude(vec)
    if (magnitude == 0f) throw IllegalArgumentException("Cannot normalize a zero vector")

    val result = FloatArray(vec.size)
    for (i in vec.indices) {
        result[i] = vec[i] / magnitude
    }
    return result
}

fun angleBetweenVectors(vec1: FloatArray, vec2: FloatArray): Float {
    if (vec1.size != vec2.size) throw IllegalArgumentException("Vectors must have the same dimension")

    val dotProd = dotProduct(vec1, vec2)
    val mag1 = vectorMagnitude(vec1)
    val mag2 = vectorMagnitude(vec2)

    // for acos (-1 to 1)
    val cosTheta = (dotProd / (mag1 * mag2)).coerceIn(-1f, 1f)
    return acos(cosTheta)
}