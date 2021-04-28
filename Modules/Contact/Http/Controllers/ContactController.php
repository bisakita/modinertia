<?php

namespace Modules\Contact\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

use App\Http\Controllers\Controller;
use Modules\Contact\Entities\Contact;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        // return view('contact::index');
        $data = Contact::all();
        // return Inertia::render('contact/index', ['data' => $data]);
        return Inertia::render('Module/Contact/index', ['data' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('contact::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        Contact::create($request->all());
        return redirect()->back();
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        return view('contact::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        return view('contact::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        // if ($request->has('id')) {
        //     Contact::find($request->input('id'))->update($request->all());
        //     return redirect()->back();
        // }

        if ($id) {
            Contact::find($id)->update($request->all());
            return redirect()->back();
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    // public function destroy(Request $request,$id)
    {
        // if ($request->has('id')) {
        //     Contact::find($request->input('id'))->delete();
        //     return redirect()->back();
        // }

        if($id) {
            Contact::find($id)->delete();
            return redirect()->back();
        }
    }
}
