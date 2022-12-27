@extends('errors::illustrated-layout')

@section('title', __('Page Expired | Electra'))
@section('code', '419')
@section('message', $exception->getMessage() ?: 'Page Expired')
@section('image')
    <img src="/storage/error-pages/419.svg" alt="419" class="w-full">
@endsection