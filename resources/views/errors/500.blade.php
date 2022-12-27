@extends('errors::illustrated-layout')

@section('title', __('Server Error | Electra'))
@section('code', '500')
@section('message', $exception->getMessage() ?: 'Server Error')
@section('image')
    <img src="/storage/error-pages/500.svg" alt="500" class="w-full">
@endsection