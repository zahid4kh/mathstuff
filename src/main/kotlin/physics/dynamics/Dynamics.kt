package math.physics.dynamics

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