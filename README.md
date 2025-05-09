# mathstuff

[![](https://jitpack.io/v/zahid4kh/mathstuff.svg)](https://jitpack.io/#zahid4kh/mathstuff) [![Kotlin](https://img.shields.io/badge/Kotlin-2.1.0-blue.svg?logo=kotlin)](https://kotlinlang.org/docs/releases.html#release-details)

---

### Option 1: If you manage repositories in `build.gradle.kts`

Your minimal module level `build.gradle.kts` should look similar to this:

```kotlin
plugins {
    kotlin("jvm") version "2.1.20" // 2.1.0 and later
}
group = "kotlin"
version = "1.0-SNAPSHOT"
repositories {
    maven { url = uri("https://jitpack.io") }
    mavenCentral()
}
dependencies {
    testImplementation(kotlin("test"))
    implementation("com.github.zahid4kh:mathstuff:1.1.0")
}
tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(17)
}
```

### Option 2: If you manage repositories in `settings.gradle.kts`

1. Add the JitPack repository to your `settings.gradle.kts` file

```kotlin
maven { url = uri("https://jitpack.io") }
```

2. Add the dependency to your `build.gradle.kts` file

```kotlin
implementation("com.github.zahid4kh:mathstuff:1.1.0")
```

---

## Basic Usage

```kotlin
fun main(){
    val side = rectArea(4f, 5f) // calculates rectangle area

    println(side) // 20.0
}
```