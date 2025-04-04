import { createClient } from "@/lib/supabase/server"
import { LogoutButton } from "@/components/logout-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, {user?.email}</CardTitle>
            <CardDescription>Your Immortals dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="text-lg font-medium">Account Information</h3>
                <p className="text-sm text-muted-foreground">Email: {user?.email}</p>
                <p className="text-sm text-muted-foreground">Last Sign In: {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'N/A'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 