import { BrowserRouter,  Routes, Route  } from 'react-router-dom'
import {
    LoginPage, 
    SinupPage,
    FeedPage,
    AddRecipePage,
    RecipeDetailPage
} from '../pages'

import { Header } from '../components'

export const Router = ()=>{
    return(
        <BrowserRouter>
            
            <Header/>
            
            <Routes>
                
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SinupPage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/add-recipe" element={<AddRecipePage/>}/>
                <Route path="/recipe/:id" element={<RecipeDetailPage/>} />
            </Routes>
        </BrowserRouter>

    )


}

