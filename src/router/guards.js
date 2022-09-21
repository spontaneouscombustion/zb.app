import  { useSessionStore } from '@/stores/session'
export default ( to ) => {
    const session = useSessionStore()
    const guestOnlyRoutes = [
        "login", "signup"
    ]
    if(session.isAuthenticated 
        && guestOnlyRoutes.includes(to.name)){
        return { name: "home" }
    }
    if( ! session.isAuthenticated 
        && to.meta.requireAuth
        && ! guestOnlyRoutes.includes(to.name) ){
        return { name: "login" }
    }
}