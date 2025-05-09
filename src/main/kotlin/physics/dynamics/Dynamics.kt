package math.physics.dynamics

import kotlin.math.pow
import kotlin.math.sqrt

fun force(
    mass: Double,
    acceleration: Double
): Double {
    return mass * acceleration
}

fun weight(
    mass: Double,
    g: Double = 9.81
): Double {
    return mass * g
}

fun frictionalForce(
    mu: Double,
    normalForce: Double
): Double {
    return mu * normalForce
}

fun momentum(
    mass: Double,
    velocity: Double
): Double {
    return mass * velocity
}

fun impulse(
    force: Double,
    time: Double
): Double {
    return force * time
}

fun changeInMomentum(
    mass: Double,
    initialVel: Double,
    finalVel: Double
): Double {
    return mass * (finalVel - initialVel)
}


fun centripetalForce(
    mass: Float,
    velocity: Float,
    radius: Float
): Float {
    return (mass * velocity.pow(2)) / radius
}

fun gravitationalForce(
    mass1: Float,
    mass2: Float,
    distanceBetween: Float
): Float {
    val G = 6.67430e-11
    return (G * mass1 * mass2 / (distanceBetween.pow(2))).toFloat()
}

fun escapeVelocity(
    mass: Float,
    distance: Float
): Float {
    val G = 6.67430e-11
    return (sqrt(2 * G * mass / distance)).toFloat()
}