package math.util

import kotlin.math.PI


fun Float.toDegrees(): Float {
    return this * 180f / PI.toFloat()
}

fun Float.toRadians(): Float {
    return this * PI.toFloat() / 180f
}