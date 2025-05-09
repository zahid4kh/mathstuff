package math.physics

import kotlin.math.pow
import kotlin.math.sqrt

fun finalVelocity(
    initialVel: Double,
    acceleration: Double,
    time: Double
): Double {
    return initialVel + acceleration * time
}

fun displacement(
    initialVel: Double,
    time: Double,
    acceleration: Double
): Double {
    return initialVel * time + 0.5 * acceleration * time.pow(2)
}

fun finalVelocitySquared(
    initialVel: Double,
    acceleration: Double,
    displacement: Double
): Double {
    return initialVel.pow(2) + 2 * acceleration * displacement
}

fun averageVelocity(
    initialVel: Double,
    finalVel: Double
): Double {
    return (initialVel + finalVel) / 2
}

fun timeFromDisplacement(
    initialVel: Double,
    acceleration: Double,
    displacement: Double
): Double {
    // Solving s = ut + 0.5at^2 -> quadratic
    val discriminant = initialVel.pow(2) + 2 * acceleration * displacement
    if (acceleration == 0.0) return displacement / initialVel
    val t1 = (-initialVel + sqrt(discriminant)) / acceleration
    val t2 = (-initialVel - sqrt(discriminant)) / acceleration
    return listOf(t1, t2).first { it >= 0 }
}