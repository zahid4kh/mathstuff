package math.coordgeom

import kotlin.math.abs
import kotlin.math.pow
import kotlin.math.sqrt

fun distance2D(x1: Float, y1: Float, x2: Float, y2: Float): Float {
    return sqrt((x2 - x1).pow(2) + (y2 - y1).pow(2))
}

fun distance3D(x1: Float, y1: Float, z1: Float, x2: Float, y2: Float, z2: Float): Float {
    return sqrt((x2 - x1).pow(2) + (y2 - y1).pow(2) + (z2 - z1).pow(2))
}

fun midpoint2D(x1: Float, y1: Float, x2: Float, y2: Float): Pair<Float, Float> {
    return Pair((x1 + x2) / 2, (y1 + y2) / 2)
}

fun midpoint3D(x1: Float, y1: Float, z1: Float, x2: Float, y2: Float, z2: Float): Triple<Float, Float, Float> {
    return Triple((x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2)
}

fun slope(x1: Float, y1: Float, x2: Float, y2: Float): Float {
    if (x1 == x2) {
        throw IllegalArgumentException("Vertical line has undefined slope (infinity)")
    }
    return (y2 - y1) / (x2 - x1)
}

fun lineEquation(x1: Float, y1: Float, x2: Float, y2: Float): Triple<Float, Float, Float> {
    val a = y2 - y1
    val b = x1 - x2
    val c = x2 * y1 - x1 * y2
    // returns coefficients a, b, c for equation ax + by + c = 0
    return Triple(a, b, c)
}

// line defined by ax + by + c = 0
fun distancePointToLine(x: Float, y: Float, a: Float, b: Float, c: Float): Float {
    return abs(a * x + b * y + c) / sqrt(a.pow(2) + b.pow(2))
}

fun areCollinear(x1: Float, y1: Float, x2: Float, y2: Float, x3: Float, y3: Float): Boolean {
    // If area is zero (or very close to zero), points are collinear
    val area = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2
    return area < 0.0001f
}