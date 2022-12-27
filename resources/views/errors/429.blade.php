@extends('errors::illustrated-layout')

@section('title', __('Too Many Requests | Electra'))
@section('code', '429')
@section('message', $exception->getMessage() ?: 'Too Many Requests')
@section('image')
    <img src="/storage/error-pages/429.svg" alt="429" class="w-full">
@endsection