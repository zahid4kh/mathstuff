package math.physics.workenpow

import math.util.toRadians
import kotlin.math.cos
import kotlin.math.pow

fun workDone(
    force: Float,
    displacement: Float,
    angleDegrees: Float = 0f
): Float {
    val angleRad = angleDegrees.toRadians()
    return force * displacement * cos(angleRad)
}

fun kineticEnergy(
    mass: Float,
    velocity: Float
): Float {
    return 0.5f * mass * velocity.pow(2)
}

fun potentialEnergy(
    mass: Float,
    height: Float,
    g: Double = 9.81
): Float {
    return mass * g.toFloat() * height
}

fun power(
    work: Float,
    time: Float
): Float {
    return work / time
}

fun totalMechanicalEnergy(
    kinetic: Float,
    potential: Float
): Float {
    return kinetic + potential
}