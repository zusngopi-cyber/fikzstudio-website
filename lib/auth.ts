// Simple encryption for password (browser-safe)
export function hashPassword(password: string): string {
  // Simple hash function (for demo - in production use bcrypt on server)
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash.toString(36)
}

export function verifyPassword(input: string, stored: string): boolean {
  return hashPassword(input) === stored
}

export function initializeAuth() {
  // Check if password is set, if not, set default
  const hashedPassword = localStorage.getItem('adminPassword')
  if (!hashedPassword) {
    // Default password: fikzstudio2024
    localStorage.setItem('adminPassword', hashPassword('fikzstudio2024'))
  }
}

export function changePassword(oldPassword: string, newPassword: string): boolean {
  const stored = localStorage.getItem('adminPassword')
  if (!stored) return false
  
  if (verifyPassword(oldPassword, stored)) {
    localStorage.setItem('adminPassword', hashPassword(newPassword))
    return true
  }
  return false
}

// Rate limiting for login attempts
export function checkRateLimit(): boolean {
  const attempts = JSON.parse(localStorage.getItem('loginAttempts') || '[]')
  const now = Date.now()
  const recentAttempts = attempts.filter((time: number) => now - time < 15 * 60 * 1000) // 15 minutes
  
  if (recentAttempts.length >= 5) {
    return false // Too many attempts
  }
  
  return true
}

export function recordLoginAttempt() {
  const attempts = JSON.parse(localStorage.getItem('loginAttempts') || '[]')
  attempts.push(Date.now())
  localStorage.setItem('loginAttempts', JSON.stringify(attempts))
}

export function clearLoginAttempts() {
  localStorage.setItem('loginAttempts', '[]')
}
